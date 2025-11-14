import { React} from "react";
import { useNavigate } from "react-router";


export const Navbar = () => {
  // TODO: Obtener datos del usuario desde /api/profile. ESTO LISTO CREO ME FALTA PROBAR
  // TODO: Implementar función handleLogout con POST a /api/logout usando credentials: 'include'. ESTE LISTO
  // TODO: Después del logout exitoso, redireccionar a /login. ESTE LISTO TAMBIÉN
  // TODO: Manejar errores apropiadamente. ESTO EN PROCESO
  const handleProfile = async (event) => {
    try {
      const profileRes = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      if (!profileRes.ok) {
        console.log("Login exitoso, pero no se pudo obtener el perfil.");
      }

      const data = await profileRes.json();

      onLogin(data.user);

      navigate('/home');

    } catch (error) {
      console.log(error)
    }
  }


  const userName = "Usuario"; // TODO: Reemplazar con el nombre real del usuario obtenido de /api/profile

  const navigate = useNavigate();
  //Implementar función handleLogout con POST a /api/logout usando credentials: 'include'
  const handleLogout = async (event) => {
    try {
      const peticion = await fetch("http://localhost:3000/api/logout", { //fetch a api logout 
        method: "POST",
        credentials: "include"
      })


      if (!peticion.ok) {  //si la peticion no es ok, da un console.log o sea un mensaje de error
        console.log("error en el fetch")
      }//sino, redirigue a login
      const data = await peticion(data.message)
      navigate("/login")

      console.log(peticion) //esto para ver como se maneja en este punto
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="bg-gray-900 text-white h-16 left-0 right-0 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-2xl font-bold">Superhéroes App</div>

        <div className="hidden md:flex items-center space-x-6">
          <span className="text-gray-300">
            Bienvenido,{" "}
            <span className="font-semibold text-white">{userName}</span>
          </span>

          <button
            onClick={
              handleLogout}
              // TODO: Implementar handleLogout aquí
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
