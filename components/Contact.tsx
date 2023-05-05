const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 
    flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textPink font-semibold flex items-center tracking-wide">
        Contact me:
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in touch</h2>
      <p className="max-w-[600px] text-center text-textLight">
        You can contact me by sending me an email to my email address that you
        will find by clicking on the button.
      </p>
      <a href="mailto:damianrondinon@gmail.com">
        <button
          className="w-40 h-14 border border-contratsColor mt-6 font-titleFont bg-buttonBlack
      text-lg text-textLight tracking-wider rounded-md hover:bg-contratsColor duration-300"
        >
          Say hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
