import React from "react";
import {
  Row,
  Col,
  Alert,
  Card,
  CardBody,
  Container,
  FormFeedback,
  Input,
  Label,
  Form,
} from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../../slices/thunk";

// import images
import profile from "../../../assets/images/profile-img.png";
import logo from "../../../assets/images/email.png";
import { createSelector } from "reselect";
import "../../../assets/scss/custom/components/Varification.scss";
import Image from "next/image";
const VarificationScreen = () => {
  //meta title
  document.title = "Forget Password | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch<any>();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      //   dispatch(userForgetPassword(values, props.history));
    },
  });

  const selectProperties = createSelector(
    (state: any) => state.ForgetPassword,
    (forgetPassword) => ({
      forgetError: forgetPassword.forgetError,
      forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
    })
  );

  const { forgetError, forgetSuccessMsg } = useSelector(selectProperties);

  return (
    <React.Fragment>
      <div className="my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={7} lg={7} xl={7}>
              <Card className="overflow-hidden">
                <CardBody className="p-5">
                  <div className="varificationIcon-container">
                    <Image src={logo} alt="" height="70" />
                  </div>

                  <div className=" pt-4 varifyContent-container">
                    <p className="">
                      {`   You've entered <strong>arslan@bennetcom</strong> as the
                      email address for your account. Please verify this email
                      address by clicking button below. Verify your email`}
                    </p>
                    <button
                      className="btn btn-primary btn-sm mt-3"
                      type="submit"
                    >
                      Verify your email
                    </button>
                    <div className="mt-5 orLinks">
                      <p>Or copy and paste this link into your browser</p>
                      <a
                        href="https://www.manjum.com/verifyemail/bWVyskdjt4ng/TH65Jksmn1c/HG67dskt5AV5e"
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.janeaustenlover.com/verifyemail/bWVyskdjt4ng/TH65Jksmn1c/HG67dskt5AV5e
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VarificationScreen;
