const Home = ({ setToken }) => {
    const handleLogout = () => {
      localStorage.removeItem('token');
      setToken(null);
    };
  
    return (
      <div>
        <h1>Homezada</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Home;
  