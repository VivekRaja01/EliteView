import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";
const TMDB_BASE = "https://api.themoviedb.org/3";
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const SAMPLE_MOVIES = [
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
  {
    id: 1,
    title: "The Sample: Rise of Code",
    overview:
      "A team of developers builds an app that changes the world — with bugs, caffeine, and teamwork.",
    poster_path:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80",
    release_date: "2023-12-01",
    vote_average: 8.4,
    trailer: "dQw4w9WgXcQ",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Ocean of UI",
    overview: "A designer must surf waves of user feedback to craft perfection.",
    poster_path:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80",
    backdrop_path:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=1400&q=80",
    release_date: "2022-06-12",
    vote_average: 7.2,
    trailer: "kXYiU_JCYtU",
    views: "980K",
  },
];



// Main App
export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

// ---------------- Main Component ----------------
function MainApp() {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark_mode") || "false")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark_mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors scroll-smooth">
      <Header dark={dark} toggleDark={() => setDark(!dark)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tv" element={<CategoryPage type="tv" />} />
          <Route path="/movies" element={<CategoryPage type="movie" />} />
          <Route path="/mylist" element={<MyListPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

// ---------------- Header ----------------
function Header({ dark, toggleDark, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val); // send query to parent for filtering
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-16 px-4 sm:px-6 lg:px-8 gap-2 md:gap-0">
        {/* Logo + Nav */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">

            <span className="hidden sm:block font-semibold text-red-600 text-3xl italic">
  EliteView
</span>



          </Link>
          <nav className="hidden md:flex gap-4">
            <Link className="hover:text-red-600" to="/">Home</Link>
            <Link className="hover:text-red-600" to="/tv">TV Shows</Link>
            <Link className="hover:text-red-600" to="/movies">Movies</Link>
            <Link className="hover:text-red-600" to="/mylist">My List</Link>
          </nav>
        </div>

        {/* Search + Dark Mode + Sign In */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            value={query}
            onChange={handleSearch}
            placeholder="Search movies..."
            className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 bg-white/80 dark:bg-gray-800/60 focus:ring-2 focus:ring-white-500 w-full md:w-64 transition-all"
          />
          <button onClick={toggleDark}>{dark ? "🌙" : "☀️"}</button>
          <Link
  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors duration-300"
  to="/signin"
>
  Sign In
</Link>

        </div>
      </div>
    </header>
  );
}


// ---------------- Footer ----------------
function Footer() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
      <div className="mb-4">
  Questions? Call <span className="underline cursor-pointer">000-800-919-1743</span>
</div>


      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-4">
        {[
          "FAQ",
          "Help Centre",
          "Account",
          "Media Centre",
          "Investor Relations",
          "Jobs",
          "Ways to Watch",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate Information",
          "Contact Us",
          "Speed Test",
          "Legal Notices",
          "Only on Netflix",
          "Select Language",
        ].map((item) => (
          <span key={item} className="hover:underline cursor-pointer">
            {item}
          </span>
        ))}
      </div>

      <div className="text-xl font-semibold italic">
  EliteView India
</div>


      <div className="text-xs mt-2 text-gray-400">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        {!showInfo && (
          <button
            onClick={() => setShowInfo(true)}
            className="text-blue-400 underline hover:text-blue-500 transition-colors duration-300"
          >
            Learn more
          </button>
        )}

        {showInfo && (
  <p className="mt-2 text-gray-400 text-sm max-w-2xl mx-auto leading-5">
    The information collected by Google reCAPTCHA is subject to the{" "}
    <a
      href="https://policies.google.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline hover:text-blue-600"
    >
      Google Privacy Policy
    </a>{" "}
    and{" "}
    <a
      href="https://policies.google.com/terms"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline hover:text-blue-600"
    >
      Terms of Service
    </a>
    , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
  </p>
)}
<br></br>
<p className="text-red-600">Created By 𝖁𝖎𝖛𝖊𝖐 𝕽𝖆𝖏𝖆</p>


      </div>
    </footer>
  );
}
// ---------------- Fetch Helper ----------------
async function fetchTMDB(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results || [];
  } catch {
    return SAMPLE_MOVIES;
  }
}

// ---------------- Pages ----------------
function HomePage() {
  return (
    <>
      <MovieGrid title="Trending Now" endpoint="movie/popular" />
      <EmailCTA />  {/* <-- Add this line right after the MovieGrid */}
    </>
  );
}
function CategoryPage({ type }) {
  const title = type === "tv" ? "TV Shows" : "Movies";
  const endpoint = type === "tv" ? "tv/popular" : "movie/popular";
  return <MovieGrid title={title} endpoint={endpoint} type={type} />;
}

function MyListPage() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favs") || "[]")
  );

  function removeFav(id) {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favs", JSON.stringify(updated));
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My List ❤️</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No saved movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favorites.map((m) => (
            <div key={m.id} className="relative group">
              <img
                src={
                  m.poster_path?.startsWith("http")
                    ? m.poster_path
                    : IMG_BASE + m.poster_path
                }
                alt={m.title}
                className="rounded w-full h-52 object-cover"
              />
              <button
                onClick={() => removeFav(m.id)}
                className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------- SignIn & Login Pages ----------------
function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("auth", JSON.stringify({ email }));
      setLoading(false);
      navigate("/"); 
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-2 mb-3 border rounded bg-transparent border-gray-400 focus:border-yellow-500 focus:outline-none"
/>

      <input
  placeholder="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-2 mb-4 border rounded bg-transparent border-gray-400 focus:border-yellow-500 focus:outline-none"
/>

      <button
        onClick={handleSignIn}
        className="w-full bg-red-600 text-white py-2 rounded mb-2  hover:bg-red-700 transition-colors"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
      <button
        className="w-full border py-2 rounded focus:border-yellow-500 focus:outline-none"
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </button>
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("auth", JSON.stringify({ email }));
      setLoading(false);
      navigate("/"); 
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 border rounded bg-transparent focus:border-yellow-500 focus:outline-none"
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-transparent focus:border-yellow-500 focus:outline-none"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-red-600 text-white py-2 rounded mb-2  hover:bg-red-700 transition-colors"
        disabled={loading}
      >
        {loading ? "Logging In..." : "Login"}
      </button>
      <button
        className="w-full border py-2 rounded focus:border-yellow-500 focus:outline-none"
        onClick={() => navigate("/signin")}
      >
        Create an account
      </button>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "What is Netflix?",
      a: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      q: "How much does Netflix cost?",
      a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      q: "Where can I watch?",
      a: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      q: "How do I cancel?",
      a: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      q: "What can I watch on Netflix?",
      a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      q: "Is Netflix good for kids?",
      a: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
    setTimeout(() => {
      contentRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-8 scroll-smooth">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`border-b border-gray-300 dark:border-gray-700 overflow-hidden transition-all duration-500 ${
              openIndex === i ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full text-left py-3 flex justify-between items-center font-medium"
            >
              {f.q}
              <span className="text-xl">{openIndex === i ? "×" : "+"}</span>
            </button>

            <div
              ref={(el) => (contentRefs.current[i] = el)}
              style={{
                maxHeight: openIndex === i ? `${contentRefs.current[i]?.scrollHeight}px` : "0px",
                transition: "max-height 0.5s ease",
              }}
              className="overflow-hidden"
            >
              <p className="pb-3 text-gray-700 dark:text-gray-300">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    // Redirect to /signin or /signup page
    window.location.href = "/signin";
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-6 rounded-lg text-center">
      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-lg sm:text-xl font-bold mb-8">
        Starts at ₹149. Cancel at any time.
      </p>

      {/* Ready to watch prompt */}
      <h2 className="text-2xl sm:text-xl mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>

      {/* Email input + button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500 text-white bg-transparent"
/>
        <button
          onClick={handleSubmit}
          className="mt-2 sm:mt-0 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}




// ---------------- Features Section ----------------
function FeaturesSection() {
  const features = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "📺",
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      icon: "💾",
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: "🌎",
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "🧒",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 dark:bg-gray-800 transition transform hover:-translate-y-2 hover:shadow-[0_8px_25px_-5px_rgba(255,255,0,0.9)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// -------------------- Movie Grid --------------------
function MovieGrid({ title, endpoint, searchQuery = "", type }) {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favs") || "[]")
  );
  const [loading, setLoading] = useState(false);

  const genres = ["All", "Action", "Drama", "Comedy", "Sci-Fi", "Documentary"];
  const [activeGenre, setActiveGenre] = useState("All");
  const [heroIndex, setHeroIndex] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      if (!TMDB_API_KEY) {
        setMovies(SAMPLE_MOVIES);
        setLoading(false);
        return;
      }
      const url = searchQuery
        ? `${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${searchQuery}`
        : `${TMDB_BASE}/${endpoint}?api_key=${TMDB_API_KEY}`;
      const data = await fetchTMDB(url);
      setMovies(data);
      setLoading(false);
    }
    load();
  }, [endpoint, searchQuery]);

  // Hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies]);

  // Horizontal scroll
  // Horizontal smooth scroll
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let direction = 1; // 1 = scroll right, -1 = scroll left
  const speed = 1; // pixels per frame
  let animationId;

  const smoothScroll = () => {
    if (direction === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      direction = -1;
    } else if (direction === -1 && container.scrollLeft <= 0) {
      direction = 1;
    }

    container.scrollLeft += direction * speed;
    animationId = requestAnimationFrame(smoothScroll);
  };

  animationId = requestAnimationFrame(smoothScroll);

  return () => cancelAnimationFrame(animationId);
}, []);


  const toggleFav = (movie) => {
    let updated;
    if (favorites.find((f) => f.id === movie.id)) {
      updated = favorites.filter((f) => f.id !== movie.id);
    } else {
      updated = [movie, ...favorites];
    }
    setFavorites(updated);
    localStorage.setItem("favs", JSON.stringify(updated));
  };

  const filtered =
    activeGenre === "All"
      ? movies
      : movies.filter((m) =>
          m.title?.toLowerCase().includes(activeGenre.toLowerCase())
        );

  return (
    <div>
      {/* Hero */}
      {movies[0] && (
        <div
          className="relative rounded-lg overflow-hidden mb-6 h-64 sm:h-96 flex items-end p-6"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(10,10,10,0.7), rgba(10,10,10,0.1)), url(${
              filtered[heroIndex]?.backdrop_path?.startsWith("http")
                ? filtered[heroIndex]?.backdrop_path
                : IMG_BASE + filtered[heroIndex]?.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-3xl text-white">
            <h2 className="text-xl sm:text-3xl font-bold">
              {filtered[heroIndex]?.title}
            </h2>
            <p className="mt-2 line-clamp-2">{filtered[heroIndex]?.overview}</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setSelected(filtered[heroIndex])}
                className="px-3 py-1 bg-white text-black rounded hover:bg-white-900 transition-colors"
              >
                ▶ Play
              </button>
              <button
                onClick={() => toggleFav(filtered[heroIndex])}
                className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-400 transition-colors"
              >
                + My List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Genres */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-3 py-1 rounded flex-shrink-0 ${
                activeGenre === g
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map((m) => (
          <div
            key={m.id}
            className="relative group overflow-hidden rounded cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={
                m.poster_path?.startsWith("http")
                  ? m.poster_path
                  : IMG_BASE + m.poster_path
              }
              alt={m.title}
              className="w-full h-52 object-cover"
              onClick={() => setSelected(m)}
            />
            {m.trailer && (
              <iframe
                src={`https://www.youtube.com/embed/${m.trailer}?autoplay=1&mute=1&controls=0&loop=1&playlist=${m.trailer}`}
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
            <div className="flex justify-between items-center mt-1 text-xs">
              <span>{m.vote_average || "-"}</span>
              <button
                onClick={() => toggleFav(m)}
                className="px-1 bg-yellow-400 rounded text-black"
              >
                {favorites.find((f) => f.id === m.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading && <p className="mt-2 text-center">Loading more...</p>}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg z-10 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={
                  selected.poster_path?.startsWith("http")
                    ? selected.poster_path
                    : IMG_BASE + selected.poster_path
                }
                alt={selected.title}
                className="w-full md:w-1/3 h-64 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-sm text-gray-500">
                  {selected.release_date} • Rating: {selected.vote_average}
                </p>
                <p className="mt-2">{selected.overview}</p>
                {selected.trailer && (
                  <div className="mt-3 aspect-w-16 aspect-h-9">
                    <iframe
                      title="trailer"
                      src={`https://www.youtube.com/embed/${selected.trailer}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64"
                    />
                  </div>
                )}
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Play
                  </button>
                  <button
                    onClick={() => toggleFav(selected)}
                    className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition-colors"
                  >
                    {favorites.find((f) => f.id === selected.id)
                      ? "★ Saved"
                      : "☆ Save"}
                  </button>
                  <button className="px-3 py-1 bg-yellow-600 rounded hover:bg-yellow-700 transition-colors">
  Share
</button>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded  hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------- Search Page Placeholder --------------------
function SearchPage() {
  return <div className="text-center mt-10">Search results will appear here</div>;
}
