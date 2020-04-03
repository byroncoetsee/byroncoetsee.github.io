import React, {useEffect, useState} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Laptop from '../images/laptop.jpeg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import {
  Link
} from "react-router-dom";
import AppLayout from '../components/layouts/app'
import axios from 'axios';
import {
  connect
} from 'react-redux';

const Product = (props) => {
  let apiUrl = 'https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev'
  const [active, setActive] = useState()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [increment, setIncrement] = useState(1)
  const [success, setSuccess] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [initialErrorState] = useState({
                                min: {
                                  error: false,
                                  message: ""
                                },
                                max: {
                                  error: false,
                                  message: ""
                                },
                                increment: {
                                  error: false,
                                  message: ""
                                }
                              })
  const [errors, setErrors] = useState(initialErrorState)

  useEffect(() => {
    axios.get(apiUrl + '/offers/' + props.match.params.id, {
      headers: {
        'x-api-key': 'A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A'
      }
    })
    .then(function (response) {

      if(response.data.status == "Active")
      {
        setActive(true)
      }
      else {
        setActive(false)
      }
      setLoading(false)
      let str = response.data.image
      if(response.data.minPrice !== null)
      {
        setMin(response.data.minPrice)
      }
      if(response.data.maxPrice !== null)
      {
        setMax(response.data.maxPrice)
      }
      if(response.data.increment !== null)
      {
        setIncrement(response.data.increment)
      }
      setProduct({
        title: response.data.offerTitle,
        price: response.data.currentPrice,
        description: response.data.description,
        image: response.data.image ? str.replace("{size}", "full") : "",
        brand: response.data.brand,
        offerId: response.data.offerId,
        id: response.data.productLineId,
        url: response.data.url
      })

      // Temorarily reused this function. To be fixed
      setError("description", response.data.description)
    })
    .catch(function (error) {
      console.log(error)
    })
  }, [])

  const setError = (name, message) => {
    var error = document.getElementById(name);
    if(error)
      error.innerHTML = message;

  }

  const validate = () => {
    const errArray = initialErrorState;
    let validate = true;
    console.log(errArray)
    console.log(min, max)
    if(parseInt(min) < 1) {
      setError("minError", "Please provide a valid minimum value")
      validate = false;
    }
    else if(parseInt(min) > parseInt(max)) {
      setError("minError", "The minimum value can not be more than the maximum value")
      validate = false;
    }

    if(parseInt(max) < 1) {
      setError("maxError", "Please provide a valid maximum value")
      validate = false;
    }
    else if(parseInt(min) > parseInt(max)) {
      setError("maxError", "The maximum value can not be less than the minimum value")
      validate = false;
    }

    if(parseInt(increment) < 1) {
      setError("incrementError", "Please provide a valid increment value")
      validate = false;
    }

    setErrors(errArray)
    console.log(errors)

    return validate
  }

  const updatePrice = () => {
    setError("incrementError", "")
    setError("maxError", "")
    setError("minError", "")
    return validate() ? postPrice() : false
  }

  const postPrice = () => {
    setUpdating(true)
    setSuccess(false)
    let apiUrl = 'https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev';
    axios.post(apiUrl + '/offers/thresholds/update', {
        offerId: product.offerId,
        max: parseFloat(max),
        min: parseFloat(min),
        increment: parseInt(increment),
        productId: product.id,
      }, {
        headers: {
        'x-api-key': 'A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A'
      }
    })
    .then(function (response) {
      console.log(response)
      setSuccess(true)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      setUpdating(false)
    });
  }

  const reviews = [];
  for(let i=0; i<4; i++) {
    reviews.push({
      id: i,
      datetime: '15 minutes ago',
      reviewer: 'Maniruzzaman Akash',
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    });
    reviews.push({
      id: i,
      datetime: '2 hours ago',
      reviewer: 'Vincent van Wyk',
      message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    });
  }


  const reviewList = reviews.map(review =>
    <div className="row">
      <div className="col-md-2">
        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
        <p className="text-secondary text-center">{review.datetime}</p>
      </div>
      <div className="col-md-10">
        <p>
          <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>{review.reviewer}</strong></a>
          <span className="float-right"><i className="text-warning fa fa-star"></i></span>
          <span className="float-right"><i className="text-warning fa fa-star"></i></span>
          <span className="float-right"><i className="text-warning fa fa-star"></i></span>
          <span className="float-right"><i className="text-warning fa fa-star"></i></span>
        </p>
        <div className="clearfix"></div>
        <br />
        <p style={{ fontSize: "0.8em" }}>{review.message}</p>
      </div>
    </div>
  );
  return (
    <AppLayout>
      <div className="row">
        <div className="col-12 text-left">
          <div className="container py-4">
            <div className="row">
              <div className={loading ? "col-12 text-center" : "col-12"}>
                {loading ? (
                  <i className="fa fa-spinner fa-spin fa-3x" style={{ marginTop: "100px" }}></i>
                ) : active ? (
                  <Tabs style={{ marginBottom: "150px" }}>
                    <TabList>
                      <Tab>Details</Tab>
                      <Tab><i className="fa fa-cogg"></i>Settings</Tab>
                    </TabList>
                    <TabPanel style={{ padding: '10px' }}>
                      <div className="row" style={{ marginBottom: "30px" }}>
                        <div className="col-12">
                          <h5>Offer Details:</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <img src={product.image} className="img-fluid" style={{ width: '400px', marginBottom: "10px", border: "1px solid #d2d1d1" }} />
                          <h6><b>Price: R {product.price}.00</b></h6>
                          <a className="btn btn-success" style={{ color: "#fff", marginTop: "10px" }} href={product.url} target="_blank">View Offer on Takealot</a>
                        </div>
                        <div className="col-8">
                          <h5><b>{product.title}</b></h5>
                          <br />
                          <small><b>Brand: {product.brand}</b></small>
                          <br />
                          <br />
                          <h6><b>Description:</b></h6>
                          <br />
                          <div className="post__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel style={{ padding: '10px' }}>
                      <div className="row" style={{ marginBottom: "30px" }}>
                        <div className="col-12">
                          <h5>Offer Settings:</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          {success ? (
                            <div className="row justify-content-center offer-message">
                              <div className="col-8">
                                Offer updated successfully
                              </div>
                            </div>
                          ) : null}
                          <div className="row justify-content-center">
                            <div className="col-8">
                              <label className="form-label">Minimum Value</label>
                              <input type="number" className="form-control" value={min} onChange={(event) => setMin(event.target.value)}/>
                              <small style={{color: '#ff0000'}} id="minError"></small>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-8">
                              <label className="form-label">Maximum value</label>
                              <input type="number" className="form-control" value={max} onChange={(event) => setMax(event.target.value)}/>
                              <small style={{color: '#ff0000'}} id="maxError"></small>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-8">
                              <a className="btn btn-success" style={{ color: "#fff", marginTop: "30px" }} onClick={() => updatePrice()}>Save
                                {updating ? (
                                  <i className="fa fa-spinner fa-spin" style={{ marginLeft: "5px" }}></i>
                                ) : null}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                ) : (
                  <h3>Offer is no longer valid</h3>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Product;
