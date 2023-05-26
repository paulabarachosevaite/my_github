export const metadata = {
  title: "About Me",
};

const AboutPage = () => {
  return (
    <div className="flex items-center flex-col gap-8 mt-8 md:w-3/4 lg:w-2/6 w-full h-full p-2 m-auto">
      <h1>About Me</h1>
      <p className="text-center">
        My full name is Paula Barachosevaite. I am computing & IT student and I
        love building stuff. This website contains all of my public Github
        repositories. Most of my projects are built using React.
        <br />
        Feel free to have a look!
      </p>
    </div>
  );
};
export default AboutPage;
