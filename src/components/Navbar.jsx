import { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaBars, FaUser, FaBell } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    // Efecto para manejar el scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manejar búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Buscando: ${searchQuery}`);
            // Aquí iría la lógica de búsqueda real
            setSearchQuery('');
            setShowSearch(false);
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-brand">
                    <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                        <i className="fas fa-brain text-xl"></i>
                        <span>URACTIVAMENTE</span>
                    </a>
                </div>

                {/* Botón de búsqueda móvil */}
                <button
                    className="mobile-search-btn"
                    onClick={() => setShowSearch(!showSearch)}
                    aria-label="Buscar"
                >
                    {showSearch ? <FaTimes /> : <FaSearch />}
                </button>

                {/* Barra de búsqueda */}
                <div className={`search-container ${showSearch ? 'active' : ''}`}>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar cursos, áreas..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-btn">
                            <FaSearch />
                        </button>
                    </form>
                </div>

                {/* Menú principal */}
                <nav className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#areas" className="nav-link" onClick={() => setIsOpen(false)}>
                                Áreas
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>
                                Características
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
                                Contacto
                            </a>
                        </li>
                    </ul>

                    {/* Iconos de usuario/notificaciones */}
                    <div className="nav-icons">
                        <button className="icon-btn" aria-label="Notificaciones">
                            <FaBell />
                            <span className="notification-badge">3</span>
                        </button>
                        <button className="icon-btn" aria-label="Perfil">
                            <FaUser />
                        </button>
                    </div>
                </nav>

                {/* Botón de menú hamburguesa */}
                <button
                    className="navbar-toggler"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menú"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Navbar;