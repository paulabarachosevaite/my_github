async function fetchRepos() {
  const response = await fetch(
    "https://api/github.com/users/paulabarachosevaite/repos"
  );
  const repos = await response.json();
  return repos;
}

const Repos = () => {
  return <div>Repos</div>;
};
export default Repos;
