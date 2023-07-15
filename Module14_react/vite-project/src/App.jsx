import "./assets/css/style.css";
import ContentSection from "./component/contentsection";
import Footer from "./component/footer";
import Header from "./component/header";
function App() {
  return (
    <>
      <div id="container">
        <Header text="Header" />
        <div className="mainContent">
          <ContentSection />
        </div>
        <Footer
          footerText="Footer Section"
          quote="Quote: Never Stop Learning"
        />
      </div>
    </>
  );
}

export default App;
