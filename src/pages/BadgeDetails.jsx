import React,{useState} from "react";
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import Badge from '../component/Badge'
import BadgeHero from '../component/BadgeHero'
import Modal from "../component/Modal";
import ModalDelete from "../component/ModalDelete";

export default function BadgeDetails(props) {
    const badgeId=props.match.params.badgeId;

    const [state, setState] = useState({
        form: {
          firstName: "",
          lastName: "",
          jobTitle: "",
          twitter: "",
          email: "",
        },
      });

      const [openModal, setOpenModal]=useState(false)

      useEffect(() => {
        getDataId()
      }, [])

      const getDataId = async () => {
        try {
          const resp = await fetch(`http://localhost:3004/data?id=${badgeId}`);
          const data = await resp.json();
         
          setState({
            form: data[0],
          });
        } catch (error) {
          console.warn(error);
        }
      };

      const handleOpenModal=()=>{
        setOpenModal(true)
      }

      const handleCloseModal=()=>{
        setOpenModal(false)
      }
  return (
    <>
      <BadgeHero />

      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName }
              lastName={state.form.lastName }
              jobTitle={state.form.jobTitle }
              twitter={state.form.twitter }
              email={state.form.email}
              avatarUrl="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57"
            />
          </div>
          <div className="col-6">
           <h3>Acciones</h3>
           <Link to={`/badges/${badgeId}/edit`} className="btn btn-info btn-lg mb-3">Editar
           </Link>
           <div>
            <button className="btn btn-danger btn-lg" onClick={handleOpenModal}>Borrar</button>
             
             {openModal && 
             <Modal>
              <ModalDelete handleCloseModal={handleCloseModal}/>
             </Modal>
            }
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
