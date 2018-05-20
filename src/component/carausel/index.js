import React, { Component } from 'react';
import {
   Container,
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption
} from 'reactstrap';

const items = [
   {
      src: 'https://mamikos.com/info/wp-content/uploads/2017/07/Izin-Bangun-Kos-kosan.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
   },
   {
      src: 'https://origin.pegipegi.com/jalan/images/pict2L/Y1/Y903661/Y903661002.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
   },
   {
      src: 'https://1.bp.blogspot.com/-I-Cvz7pSRpk/V6jAL8_Z6II/AAAAAAAAAL0/ptR7hjkBEk4v6qqmfjA2ad_gzlnPIGeeQCLcB/s1600/peluang-usaha-bisnis-kost-kostan.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
   }
];

class Example extends Component {
   constructor(props) {
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
            <CarouselItem
               onExiting={this.onExiting}
               onExited={this.onExited}
               key={item.src}
               className="mb-4"
            >
               <img width="100%" style={{ height: '400px' }} src={item.src} alt={item.altText} />
               <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
         );
      });

      return (
         <Container>
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
         </Container>
      );
   }
}


export default Example;