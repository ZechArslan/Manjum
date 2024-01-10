import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const CardPricing = (props:any) => {
  return (
    <React.Fragment>
      <Col xl="3" md="6">
        <Card className="plan-box">
          <CardBody className="p-4">
            <div className="d-flex">
              <div className="flex-grow-1">
                <h5>{props.pricing.title}</h5>
                <p className="text-muted">{props.pricing.description}</p>
              </div>
              <div className="flex-shrink-0 ms-3">
                <i
                  className={"bx " + props.pricing.icon + " h1 text-primary"} style={{lineHeight:1}}
                />
              </div>
            </div>
            <div className="py-4">
              <h2>
                <sup>
                  <small>$</small>
                </sup>{" "}
                {props.pricing.price}/{" "}
                <span className="font-size-13">{props.pricing.duration}</span>
              </h2>
            </div>
            <div className="text-center plan-btn">
              <Link
                to={props.pricing.link}
                className="btn btn-primary btn-sm waves-effect waves-light "
              >
                Sign up Now
              </Link>
            </div>

            <div className="plan-features mt-5">
              {props.pricing.features.map((feature:any, key:any) => (
                <p key={"_feature_" + key}>
                  <i className="bx bx-checkbox-square text-primary me-2" />{" "}
                  {feature.title}
                </p>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default CardPricing