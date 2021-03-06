import React ,{Fragment,Component} from "react";
import {Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption} from 'reactstrap';

  const items = [
    {
      src: 'https://www.valderamobili.ru/images/home/intro_0.jpg',
      altText: 'Любая мебель для Вас',
      caption: 'для спальни'
    },
    {
      src: 'https://manhattancomfort.ru/slides/living/1.jpg',
      altText: 'Любая мебель для Вас',
      caption: 'для гостинной'
    },
    {
      src: 'https://artmebel.center/images/kat/modern/aleksandro/a.jpg',
      altText: 'Любая мебель для Вас',
      caption: 'для кухни'
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
              <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
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
