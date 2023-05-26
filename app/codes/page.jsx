import RepoContainer from "../components/RepoContainer";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/paulabarachosevaite/repos"
  );
  const repos = await response.json();
  return repos;
}
const Codes = async () => {
  const repos = await fetchRepos();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:grid-rows-6 md:grid-rows-5 gap-8">
      {repos.map((repo) => (
        <RepoContainer
          key={repo.id}
          name={repo.name}
          link={repo.html_url}
          description={repo.description}
        ></RepoContainer>
      ))}
    </div>
  );
};
export default Codes;
