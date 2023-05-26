export const metadata = {
  title: "About Me",
};

const AboutPage = () => {
  return (
    <div className="flex items-center flex-col gap-8 mt-8 md:w-3/4 lg:w-2/6 w-full p-2 m-auto">
      <h1>About Me</h1>
      <p className="text-center">
        My full name is Paula Barachosevaite. I'm a passionate person in
        everything I do, and I just love programming. Currently, I'm a part-time
        student at Open University, where I'm working towards my bachelor's
        degree in Computing and IT. This website contains all of my public
        Github repositories. Most of my projects are built using React.
        <br />
        Feel free to have a look!
      </p>
    </div>
  );
};
export default AboutPage;
