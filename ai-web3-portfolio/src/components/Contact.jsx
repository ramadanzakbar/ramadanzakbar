import { motion } from 'framer-motion';

export const Contact = () => (
  <section className="section contact" id="contact">
    <motion.div
      className="contact__wrapper"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact__badge">Mari bangun masa depan</div>
      <h2>
        Siap untuk menghadirkan produk dengan DNA AI dan Web3 yang terukur dan dapat dipercaya?
      </h2>
      <p>
        Saya membuka kolaborasi untuk riset, venture baru, atau konsultasi strategi pengembangan
        AI terdesentralisasi. Kirimkan ide atau tantanganmu.
      </p>
      <div className="contact__actions">
        <a href="mailto:ai@ramadanzakbar.dev" className="btn btn--primary">Hubungi Saya</a>
        <a href="https://cal.com" target="_blank" rel="noreferrer" className="btn btn--ghost">
          Jadwalkan Diskusi
        </a>
      </div>
    </motion.div>
  </section>
);

