import React ,{Fragment,Component} from "react";
import {Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption} from 'reactstrap';

  import Img1 from '../../images/gall1.jpg';
  import Img2 from '../../images/gall2.jpg';
  import Img3 from '../../images/gall3.jpg';



  const items = [
    {
      src: 'https://img1.goodfon.ru/original/2560x1920/7/f0/plyazh-more-yarkiy-svet.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://wallbox.ru/resize/1680x1050/wallpapers/main/201121/0eb56b45fdfa6535cf1d0f1740cd0af0.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://img.fonwall.ru/o/97/tropiki-more-plyaj-ostrov.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
export default class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem className={"gallery"}
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} className={"img_style"}/>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });

        return (
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
      }
    }
