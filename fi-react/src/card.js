import React from "react";

function Card(props) {
  return (
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
        <h6 class="card-price text-center">{props.data.currency}{props.data.price}<span class="period">{props.data.period}</span></h6>
        <hr/>
        <ul class="fa-ul">

          {
            props.data.offers.map((offers) => {
              return <li className={offers.isEnabled ? "" : "text-muted"}><span class="fa-li"><i className={`fas ${offers.isEnabled ? 'fa-check' : 'fa-times'}`}></i></span>{offers.name}</li>
            })
          }

          {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
          <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li> */}
        </ul>
        {/* <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a> */}
      </div>
    </div>
  </div>
  );
}

export default Card;