import { useState } from "react";

const useToggle = (inicial = false) => {
    const [valor, setValor] = useState(inicial);

    const alternar = () => setValor((anterior) => !anterior)

    return [valor, alternar]
};

export default useToggle;
