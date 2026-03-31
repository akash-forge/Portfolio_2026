import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong');
      }
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 golden-section">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
        <div className="text-gray-300 mb-8 max-w-lg mx-auto bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <p className="flex items-center justify-center gap-3 mb-3">
            <span className="text-secondary font-semibold">Email:</span> 
            <a href="mailto:006akashm@gmail.com" className="hover:text-primary-light transition">006akashm@gmail.com</a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <span className="text-secondary font-semibold">Phone:</span> 
            <a href="tel:+919443575131" className="hover:text-primary-light transition">+91 9443575131</a>
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-primary/50"
            >
              Send Message
            </button>
            {status && (
              <p className={`text-center mt-4 ${status.includes('success') ? 'text-green-400' : 'text-primary-light'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
