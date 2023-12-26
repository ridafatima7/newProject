import React,{useState} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Button, Col, Row, ModalHeader, Modal, ModalBody,ModalFooter,Input,FormGroup,Label,Form,Alert} from 'reactstrap';
import { FiShoppingBag } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import { SlWallet } from "react-icons/sl";
import { MdModeEditOutline } from "react-icons/md";

const Sidebar = (args) => {
  const [errorMessage, setErrorMessage] = useState("");
const [error, setError] = useState(false);
  const onDismissError = () => setError(false);
  const [id, setInformationid] = useState(null);
  const[editmodal, setEditModal]=useState(false);
  const onDismisseditSuccess = () => seteditSuccess(false);
  const [editsuccess, seteditSuccess] = useState(false);
   const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const edittoggle1 = (event) => {
    setEditModal(!editmodal);
  };
  const editModalClose = () => {
    setEditModal(!editmodal);
  }
  function EditInformation(e)
  {
    // e.preventDefault();
    // const disasterType=e.target.DisasterType.value;
    // const title=e.target.Title.value;
    // const Description=e.target.Description.value;
    // const area=e.target.area.value;
    // // const xcoordinates=e.target.xcoordinates.value;
    // // const ycoordinates=e.target.ycoordinates.value;
    // const population=parseInt(e.target.Population.value);
    // const survivors=parseInt(e.target.survivors.value);
    // const deaths=parseInt(e.target.deaths.value);
    // const date=e.target.date.value;
    // const shelters=parseInt(e.target.shelters.value);
    // const food=parseInt(e.target.food.value);
    // const medicine=parseInt(e.target.medicine.value);
    // // const gallery=e.target.gallery.value;
    // if( (survivors + deaths) > population || shelters>population )
    //  {
    //      if((survivors+population)> population){
    //        setIsCustomError(true);
    //       setErrorMessage("Survivors/deaths should not be greater than population !");
    //       setError(true);
    //       console.log("Survivors should not be greater than population !")
    //      }
    //     //  else if(deaths>population ){
    //     //   setIsCustomError(true);
    //     //   setErrorMessage("Deaths should not be greater than population !");
    //     //   setError(true);
    //     //  }
    //      else if(shelters>population)
    //      {
    //       setIsCustomError(true);
    //       setErrorMessage("Shelters should not be greater than population !");
    //       setError(true);
    //      }
    //     return;
    //  }
     
    // if(selectedFiles){
    //   selectedFiles.forEach((file) => {
    //   formData.append('files', file);
    //   });
    // }
    // else
    // {
    //   formData.append('files', []);
    // }
    // formData.append('disasterType', disasterType);
    // // formData.append('xcoordinates',xcoordinates );
    // // formData.append('ycoordinates',ycoordinates );
    // formData.append('Description',Description);
    // formData.append('population',population);
    // formData.append('title',title);
    // formData.append('id',id);
    // formData.append('area',area);
    // formData.append('date',date);
    // formData.append('survivors',survivors);
    // formData.append('deaths',deaths);
    // formData.append('shelters',shelters);
    // formData.append('food',food);
    // formData.append('medicine',medicine);
    // axios({     
    //   withCredentials: true,
    //   method:'post',
    //   url:"http://localhost:8000/Information/EditInformation",
    //   // data:{id:id,disasterType:disasterType, title:title ,Description:Description, area:area, xcoordinates:xcoordinates,ycoordinates:ycoordinates,population:population
    //   //   ,survivors:survivors,deaths:deaths,date:date,shelters:shelters,food:food,medicine:medicine,gallery:gallery},
    //   data:formData,
    // })
    // .then(res=>{
    //   if(res.data == "success")
    //   {
    //     seteditSuccess(true); 
    //     GetInformation();
    //     setRerender(!rerender);
    //   }
    //   else
    //   {
    //     setErrorMessage(res.data);
    //     setError(true);
    //   }
    //   setEditModal(!editmodal); 
      
    // })
    // .catch(error=>{

    //   setErrorMessage("Failed to connect to backend");
    //   setError(true);
    //   console.log(error);
     
    // })
 
  };
  return (
    <div>
      <Modal isOpen={editmodal} toggle={edittoggle1} {...args} size='lg'>
        <Form role="form" onSubmit={EditInformation} >
            <ModalHeader toggle={edittoggle1}><b style={{ fontSize: '18px', marginLeft: '2px' }}>Update Profile</b></ModalHeader>
          <ModalBody>
            {error ?
              <Alert color="danger" isOpen={error} toggle={onDismissError}>
                <strong> {errorMessage}</strong>
              </Alert>
              :
              <></>
              //  <h4 style={{color: 'red'}}></h4> 
            }
            <Row>
              <Col md={6}>
                <FormGroup>
                <img className='edit-img' src='/Images/Avatar.png' alt='Avatar Image' onError={(e) => console.error("Image Error", e)}></img>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input
                    id="id"
                    className='edit-Input'
                    name="id"
                    placeholder="info id"
                    type="hidden"
                    value={id}
                  />
                  <Input
                    id="u_name"
                    className='edit-Input'
                    name="u_name"
                    placeholder="Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>

                  <Input
                    id="Title"
                    className='edit-Input'
                    name="phone"
                    placeholder="Phone No"
                    type="text"
                    maxLength="50"
                    minLength="30"
                    style={{ color: 'black' }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>

                  <Input
                    id="Area"
                    name="email"
                    className='edit-Input'
                    placeholder="Email"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>

                  <Input
                    id="Description"
                    name="house"
                    className='edit-Input'
                    placeholder="House No"
                    type="text"
                    minLength="50"
                    style={{ color: 'black' }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    id="Population"
                    name="Street"
                    className='edit-Input'
                    placeholder="Street No"
                    type='number'
                    min="0"
                    max="1000000"
                    style={{ color: 'black' }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>

                  <Input
                    id="survivors"
                    name="Floor"
                    placeholder="Floor No"
                    className='edit-Input'
                    type='number'
                    min="0"
                    max="1000000"
                    style={{ color: 'black' }}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" className='update' >
              Update
            </Button>{' '}
            {/* <Button color="secondary" onClick={editModalClose}>
              Cancel
            </Button> */}
          </ModalFooter>
        </Form>
      </Modal>
      <section className='container pt'>
        <div className='sidebar'>
          <div className='sidebar-components'>
            <IoIosArrowBack size={26} className='sidebar-components-icon' />
            <img src='/Images/Avatar.png' alt='Avatar Image' onError={(e) => console.error("Image Error", e)} />
            <Button >Login to Earn Rewards</Button>
            <div onClick={edittoggle1}>
              <MdModeEditOutline className='MdOutlineModeEdit-icon' size={18} />
            </div>
          </div>
        </div>
        <div className='sidebar-items pt'>
          <hr />
          <div>
            <BsShop size={28} />
            <span>Shop</span>
          </div>
          <hr />
          <div>
            <MdShoppingCartCheckout size={28} />
            <span>Additional Products</span>
          </div>
          <hr />
          <div>
            <FiShoppingBag size={28} />
            <span>My Orders</span>
          </div>
          <hr />
          <div>
            <SlWallet size={28} />
            <span>Wallet & promos</span>
          </div>
          <hr />
          <div>
            <FiAlertCircle size={28} />
            <span>AboutUs</span>
          </div>
          <hr />
        </div>
      </section>
    </div>
  )
}

export default Sidebar
