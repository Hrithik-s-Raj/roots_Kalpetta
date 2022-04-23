/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from "theme-ui";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import uber from "assets/images/clients/uber.png";
import google from "assets/images/clients/google.png";
import paypal from "assets/images/clients/paypal.png";
import microsoft from "assets/images/clients/microsoft.png";
import dribbble from "assets/images/clients/dribbble.png";
import Typewriter from "typewriter-effect";
const clients = [
  {
    id: 1,
    name: "uber",
    logo: uber,
  },
  {
    id: 2,
    name: "Google",
    logo: google,
  },
  {
    id: 3,
    name: "PayPal",
    logo: paypal,
  },
  {
    id: 4,
    name: "Microsoft",
    logo: microsoft,
  },
  {
    id: 5,
    name: "Dribbble",
    logo: dribbble,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === "prev" ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const Clients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="treatments" as="section" sx={styles.section}>
      <Container>
        <div className="aboutus">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("About us!").pauseFor(2500).start();
            }}
          />
        </div>

        <h3 className="roots_about">
          ROOTS dental and Maxillofacial clinic is a brand-new clinic located in
          Kalpetta, Wayanad. Our clinic with its unique design is situated
          idyllically in the central part of Kalpetta town. Offering a serene
          and pleasant atmosphere with positive vibes, our clinic which is
          spread over an area of 700 sq. ft. is an eclectic blend of futuristic
          style and rustic charm. We offer an extremely high level of service
          and pride ourselves in the professional skills of our team of
          specialists who are at your service and can offer you a full range of
          dental care, right up to the most cutting-edge innovations and
          treatments. Our infrastructure offers competent dental care in a
          soothing environment. The clinic is equipped with an advanced
          chair-side digital radiography system, which provides accurate results
          with minimum safety risks. We are strict about infection control in
          the clinic. All instruments undergo rigid protocols of sterilization
          and disinfection. We have a full range of services on offer, from
          general to family dentistry, to more specialized treatments such as
          root canal treatment, oral and maxillofacial surgery, orthodontics,
          pediatric dentistry, geriatric dentistry, gum care, dental implants,
          cosmetic dentistry and facial esthetic procedures.
        </h3>
        {/* <SectionHeading slogan="About Us" title="Roots Dental" /> */}

        {/* <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image loading="lazy" src={client.logo} alt={client.name} />
            </Box>
          ))}
        </Slider> */}
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    pt: [0, 0, 25, 25, 25, 6],
    "&.slick-slider": {
      marginBottom: "40px",
    },
    ".slick-track": {
      display: "flex",
      alignItems: "center",
    },
  },
  logo: {
    display: "flex !important",
    justifyContent: "center",
    mx: "10px",
    ":focus": {
      outline: "none",
    },
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  paginationButton: {
    minHeight: "30px",
    padding: 0,
    position: "absolute",
    bottom: "-60px",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: "calc(50% - 16px)",
      transform: "translateX(-50%)",
    },
    "&.slick-next": {
      transform: "translateX(50%)",
      right: "calc(50% - 16px)",
    },
  },
};
