import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Server unreachable. Please check your connection.' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
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

        <div className="glass-panel p-8 md:p-12 text-left relative overflow-hidden">
          {/* Form Status Banner */}
          {status.message && (
            <div className={`absolute top-0 left-0 w-full p-4 text-center text-sm font-medium transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
              status.type === 'success' ? 'bg-green-500/20 text-green-400 border-b border-green-500/30' : 
              status.type === 'error' ? 'bg-primary/20 text-primary-light border-b border-primary/30' : 
              'bg-blue-500/20 text-blue-300 border-b border-blue-500/30'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
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
              disabled={loading}
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-primary-dark hover:to-secondary-dark hover:shadow-primary/50 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
