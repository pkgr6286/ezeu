export default function ContactMap() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white text-center lg:text-left">
        Our Location
      </h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0000000000005!2d77.58000000000001!3d12.970000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d000000000%3A0x0!2sJ.P.%20Nagar%209th%20Phase%2C%20Bengaluru%2C%20Karnataka%20560076%2C%20India!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="EZEU Office Location"
        ></iframe>
      </div>
    </div>
  )
}
