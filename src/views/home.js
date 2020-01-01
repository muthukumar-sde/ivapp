import React, { Component, Fragment } from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import { assetURL } from '_constants';
import { authService } from "components";
import { getUserSubscriptionList } from 'redux/actions';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from 'views/signUp';
import Image from 'react-bootstrap/Image';
import iconSet from 'assets/selection.json';
import IcomoonReact from 'icomoon-react';
import { Scrollbars } from 'react-custom-scrollbars';
import './home.css'

const mapStateToProps = ({ subscription, authUser }) => {
	const { loading, subscription_list } = subscription;
	const { auth_info } = authUser;
	return { loading, subscription_list, auth_info };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserSubscriptionList: () => {
			dispatch(getUserSubscriptionList())
		}
	}
}

class Home extends Component {
	constructor(props) {
		super(props);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null,
			signUpModel: false,
			modalShow: false,
			subscription_list: [],
			auth_info:{}		 
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	}

	componentDidMount() {
		this.props.getUserSubscriptionList()	 
	 
	}

	componentWillReceiveProps({ loading, subscription_list, auth_info }) {
		if (!loading) {
			if (subscription_list.status) {
				this.setState({ subscription_list: subscription_list.data });
			}
			this.setState({ auth_info: auth_info });
		}
	}

	render() {
		const { index, direction, subscription_list, auth_info } = this.state; 
	 
		return (
			<Fragment>
				<section className="secOne">
					<Container>
						<Row>
							<Col xs={12} sm={7}>
								<div className="banner_text">
									<h1>Lorem Ipsum <br /><span>Lorem Ipsum</span> is a Dummy Text</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link to='/' className="hvr-sweep-to-right">Lorem Ipsum</Link>
								</div>
							</Col>
							<Col xs={12} sm={5}><Image src={`${assetURL}images/home/banner.png`} alt="Banner" fluid /></Col>
						</Row>
					</Container>
				</section>


				<section className="secTwo">
					<Container>
						<Row>
							<Col sm={12} lg={4}>
								<Carousel
									activeIndex={index}
									direction={direction}
									onSelect={this.handleSelect}
									indicators={false}
									nextIcon={<span aria-hidden="true" className="cc-next-icon"><IcomoonReact iconSet={iconSet} color="#787977" size={18} icon="right-arrow" /></span>}
									prevIcon={<span aria-hidden="true" className="cc-prev-icon"><IcomoonReact iconSet={iconSet} color="#787977" size={18} icon="left-arrow" /></span>}
								>
									<Carousel.Item>
										<div className="secTwoSliderText">
											<h4>Lorem Ipsum</h4>
											<h2 className="secTitle">Our Features</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="secTwoSliderText">
											<h4>Lorem Ipsum</h4>
											<h2 className="secTitle">Our Features</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="secTwoSliderText">
											<h4>Lorem Ipsum</h4>
											<h2 className="secTitle">Our Features</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										</div>
									</Carousel.Item>
								</Carousel>
							</Col>
							<Col sm={12} lg={8}>
								<div className="secTwoContent">
									<Row>
										<Col sm={6}>
											<div className="s2desc">
												<div className="s2descImg"><IcomoonReact iconSet={iconSet} color="#75bd3d" size={65} icon="secure-payment" /></div>
												<h3>Secure Payment Via Stripe</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</Col>
										<Col sm={6}>
											<div className="s2desc">
												<div className="s2descImg"><IcomoonReact iconSet={iconSet} color="#75bd3d" size={65} icon="one-time" /></div>
												<h3>One Time or Recuring Payments</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="secThree">
					<Container>
						<Row>
							<Col>
								<div className="secThreeTitle">
									<h2>Subscribe Your Plan</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xl={1}></Col>
							<Col xl={10}>
							<Slider
									dots={false}
									infinite={false}
									slidesToShow={3}
									slidesToScroll={1}
									accessibility={true}
									initialSlide = {0}
									autoplay = {true}
									className = 'subscription-home-slider'
									responsive={ [
										{
										  breakpoint: 1000,
										  settings: {
											slidesToShow: 2
										  }
										},
										{
										  breakpoint: 480,
										  settings: {
											slidesToShow: 1
										  }
										}
									  ]}
								>
									{
										subscription_list.map((list, i) => {
											return (
												<div className="secThreePlan" key={i}>
													<div className="plan-title">
														<Image src={`${assetURL}images/home/premium.png`} alt="Banner" fluid />
														<h3>{list.plan_name}</h3>
														<p className="price-detail">{(list.price === 0 ? 'Free' : <Fragment><sup>$</sup>{list.price}</Fragment>)}</p>
													</div>
													<Scrollbars style={{ height: 220}}>
														<ul>
															{
																(!_.isEmpty(list.benefits)) ?
																	list.benefits.map((benefit, i) => <li key={i}><IcomoonReact iconSet={iconSet} color="#0086c5" size={16} icon="check" />{benefit}</li>)
																	: null
															}
														</ul>
													</Scrollbars>
													<Link to='/' className="hvr-sweep-to-bottom">Buy now</Link>
												</div>
											);
										})
									}
								</Slider>
							</Col>
							<Col xl={1}></Col>
						</Row>
					</Container>
				</section>	
				 		 
				{!auth_info.status ? (
				<section className="signup_to_join">
					<Container>
						<Row>
							<Col sm={6} md={7} lg={8}>
								<div className="signup_to_join_title">
									<Row>
										<Col>
											<h2>Sign Up to Join</h2>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua</p>
											{/* <Link to='/' className="hvr-sweep-to-bottom" onClick={()=>{ this.setState({signUpModel : true })}}>Sign Up Now</Link> */}
											<button type="button" className="hvr-sweep-to-bottom" onClick={() => this.setState({ signUpModel: true })}>Sign Up Now</button>
											<SignUp
												show={this.state.signUpModel}
												onHide={() => this.setState({ signUpModel: false })}
												title="Sign Up"
												{...this.props}
											/>
										</Col>
									</Row>
								</div>
							</Col>
							<Col sm={6} md={5} lg={4}>
								<Image src={`${assetURL}images/home/sign_up.png`} alt="Image" fluid />
							</Col>
						</Row>
					</Container>
				</section>
				):<></>}
				{/*
				Sign Up modal
				<SignUp show={this.state.signUpModel} onHide={modalClose} signInModelShow={signInModelShow} {...this.props} />
			*/}
			</Fragment>
		);
	}
}

const HomeConnected = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default HomeConnected;