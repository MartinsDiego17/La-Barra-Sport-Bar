import Swal from "sweetalert2";

export const getCost = async () => {
    const calcularDistancia = (lat1, lon1, lat2, lon2) => {
        const radioTierra = 6371e3;
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = radioTierra * c;
        return distancia;
    };

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve([coords.latitude, coords.longitude]);
                },
                (err) => {
                    Swal.fire("Para seleccionar este método de entrega debes brindar acceso a tu ubicación");
                    reject([0, 0]);
                    return 0;
                }
            );
        });
    };

    try {
        const [latitudUsuario, longitudUsuario] = await getLocation();
        const latitudLocal = -20.25633382832686;
        const longitudLocal = -70.13313193360402;
        const distancia = calcularDistancia(latitudUsuario, longitudUsuario, latitudLocal, longitudLocal);
        if (distancia < 1500) return 0;
        return Math.floor(distancia * 0.5);
    } catch (error) {
        console.error("Error al calcular el costo del delivery:", error);
        return 0.1;
    }
};
