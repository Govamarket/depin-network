// Main App Component with Navigation
const DePINAuthApp = () => {
  const [currentPage, setCurrentPage] = useState("signin");

  return (
    <div>
      {currentPage === "signin" ? (
        <SignInPage onNavigateToRegister={() => setCurrentPage("register")} />
      ) : (
        <RegisterPage onNavigateToSignIn={() => setCurrentPage("signin")} />
      )}
    </div>
  );
};

export default DePINAuthApp;
