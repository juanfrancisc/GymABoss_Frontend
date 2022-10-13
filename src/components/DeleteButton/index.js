import Trash from '../../assets/imagenes/trash.png';
import { useTokenContext } from '../../contexts/TokenContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteExerciseButton = ({id , setDeleteExercise}) => {
  const { token } = useTokenContext();
  const [setLoading] = useState(true);
  
  
  

  return (

    <input 
        type="image" 
        alt="Boton de borrar ejercicio"
        src={Trash}
        height={45}
        onClick={async () => {
                try {
                    const res = await fetch(
                        `${process.env.REACT_APP_API_URL}/deleteExercise/${id}`,
                        {
                            method: 'DELETE',
                            headers: {
                                authorization: token,
                            },
                        }
                    );

                    const body = await res.json();

                    if (!res.ok) {
                        throw new Error(body.message);
                    }

                    setDeleteExercise(id);
                    toast.success(body.message);
                } catch (error) {
                    console.error(error.message);
                    toast.error(error.message);
                    
                } finally {
                    setLoading(false);
                }
            }
          }
        />
          

                            
)}

export default DeleteExerciseButton