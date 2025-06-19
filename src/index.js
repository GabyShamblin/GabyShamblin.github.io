import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Resume from "./pages/Resume";
import { Contact } from "./pages/Contact";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
		<Routes>
			<Route path="/" element={<App />} >
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/:id" element={<ProjectPage />} />
				<Route path="resume" element={<Resume />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	</HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
