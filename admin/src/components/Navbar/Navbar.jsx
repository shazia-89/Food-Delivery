const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Food Delivery</a>
      </div>
      <div className="navbar-menu">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/mobile-app">Mobile App</a>
        <a href="/contact">Contact Us</a>
        <a href="/login">Sign In</a>
      </div>
    </nav>
  );
};