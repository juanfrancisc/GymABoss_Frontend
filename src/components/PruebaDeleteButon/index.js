import Trash from '../../assets/imagenes/trash.png';
import { useNavigate } from 'react-router-dom'
import { useTokenContext } from '../../contexts/TokenContext';
import useUser from '../../hooks/useUser';
import useExercises from '../../hooks/useExercises';
import { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteExerciseButton = ({id , setDeleteExercise}) => {
  const { token } = useTokenContext();
  const [loading, setLoading] = useState(true);
  const [ exercise, setExercise ] = useState();
  
  
  

  return (

    <input 
        type="image" src={Trash}
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
                    //console.log(res);

                    const body = await res.json();
                    //console.log(body)

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