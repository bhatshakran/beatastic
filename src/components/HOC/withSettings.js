import React from "react";

const withSettings = (WrappedComponent) => {
  class WithSettings extends React.Component {
    constructor(props) {
      super(props);
      let initialVal;
      let { innerWidth: width } = window;

      this.releasesSettings = {
        responsive: [
          {
            breakpoint: 2800,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          // {
          //   breakpoint: 600,
          //   settings: {
          //     slidesToShow: 1,
          //   },
          // },
        ],
      };
      const { responsive } = this.releasesSettings;
      if (
        width < responsive[0].breakpoint &&
        width > responsive[1].breakpoint
      ) {
        initialVal = responsive[0].settings.slidesToShow;
      } else if (
        width < responsive[1].breakpoint &&
        width > responsive[2].breakpoint
      ) {
        initialVal = responsive[1].settings.slidesToShow;
      } else if (width < responsive[2].breakpoint) {
        initialVal = responsive[2].settings.slidesToShow;
      } else {
        initialVal = 6;
      }
      //  state
      this.state = {
        slidesToShow: initialVal,
      };
    }

    // album cards renderer function
    cardsrenderer = () => {
      let { innerWidth: width } = window;
      const { responsive } = this.releasesSettings;
      if (
        width < responsive[0].breakpoint &&
        width > responsive[1].breakpoint
      ) {
        this.setState({ slidesToShow: responsive[0].settings.slidesToShow });
      } else if (
        width < responsive[1].breakpoint &&
        width > responsive[2].breakpoint
      ) {
        this.setState({ slidesToShow: responsive[1].settings.slidesToShow });
      } else if (width < responsive[2].breakpoint) {
        this.setState({ slidesToShow: responsive[2].settings.slidesToShow });
      } else {
        this.setState({ slidesToShow: 6 });
      }
    };

    render() {
      return (
        <WrappedComponent
          cardsrenderer={this.cardsrenderer}
          slidesToShow={this.state.slidesToShow}
        />
      );
    }
  }
  return WithSettings;
};

export default withSettings;
