import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon2" />
                <h3 className="text2">Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon2" />
                <h3 className="text2">Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 16rem 0;

  .grid {
    gap: 4.8rem;
  }
  .services-2{
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: transparent;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-1,
  .services-3 {
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: linear-gradient(-45deg, #cab4d1, #2c0b36, #8eb1d4, #23d5ab);
	  background-size: 400% 400%;
	  animation: gradient 15s ease infinite;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .services-1,
  .services-3{
    color: #fff;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    height: 20rem;

    .services-colum-2 {
      background: linear-gradient(-45deg, #cab4d1, #2c0b36, #8eb1d4, #23d5ab);
	    background-size: 400% 400%;
	    animation: gradient 15s ease infinite;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      height: 6rem;
      align-items: center;
      text-align: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2.2rem;
    font-weight: 700;
    font-style: italic;
    font-variant: small-caps;
  }

  .icon {
    /* font-size: rem; */
    width: 10rem;
    height: 10rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
  }
  .icon2 {
    /* font-size: rem; */
    width: 9rem;
    height: 9rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
  }
  .text2{
    margin-top:-4px;
    margin-right: 8px;
    color: #fff;
  }
`;
export default Services;