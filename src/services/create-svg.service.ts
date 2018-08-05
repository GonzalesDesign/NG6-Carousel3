import { Injectable } from '@angular/core';
import { FunksionsService } from './funksions.service';
import { TweenMax, TimelineMax, Power2, Power4, Elastic } from 'gsap/TweenMax';

@Injectable({
  providedIn: 'root'
})
export class CreateSvgService {

  constructor(private _funksions: FunksionsService) { }

  /* fCreateCircle(parentEl) {
    const e = document.createElement('div');
    e.id = 'circle';

    const parent = document.getElementById(parentEl);
    parent.appendChild(e);
    // this.fCircleStyling(e, 3);
    console.log(e, ' | ', parent);
    console.log('tagName: ', e.tagName, ' |  id:', e.id);
    console.log('parent tagName: ', parent.tagName, ' |  id:', parent.id);
  } */

  fPolarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  fDescribeArc(x, y, radius, startAngle, endAngle) {
      const start = this.fPolarToCartesian(x, y, radius, endAngle);
      const end = this.fPolarToCartesian(x, y, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
      console.log('largeArcFlag: ', largeArcFlag);
      // const d = [ start.x, start.y, radius, radius, 0, largeArcFlag, 0, end.x, end.y ];
      const d = [
          'M', start.x, start.y,
          'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(' ');
      console.log('d: ', d);
      for (let i = 0; i < 10; i++) {

      }
      return d;
  }

  fReadyState = function (elem) {
    console.log('elem: ', elem);
    console.log('document.readyState: ', document.readyState);
    console.log('elem: ', elem);
    // this._funksions.fTMxToRotate(elem, 1, 360);

    if (document.readyState === 'loading') {
      // TweenMax.to(elem, 0, {scale: .25, transformOrigin: '50% 50%'});
      console.log('state loading');document.getElementById(elem).setAttribute('d', this.fDescribeArc(150, 80, 50, 0, 100));
    }
  };

  fCreateSVG() {
    const container = document.getElementById('dynamic-loading-kontainer-id');
    // this._funksions.fElementWidthId(container, 300);
    // container.setAttribute('width', '400');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '200');
    svg.setAttribute('height', '200');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('id', 'mysvg');
    svg.setAttribute('width', '400');
    svg.setAttribute('overflow', 'visible');
    // document.getElementById(svg).setAttribute('d', this.fDescribeArc(150, 80, 50, 0, 100));

    /* const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    ellipse.setAttribute('fill', 'green');
    ellipse.setAttribute('stroke', 'black');
    ellipse.setAttribute('cx', '45');
    ellipse.setAttribute('cy', '45');
    ellipse.setAttribute('rx', '40');
    ellipse.setAttribute('ry', '20');
    svg.appendChild(ellipse); */

    /* const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'cyan');
    circle.setAttribute('stroke-width', '10');
    circle.setAttribute('cx', '170');
    circle.setAttribute('cy', '60');
    circle.setAttribute('r', '40');
    circle.setAttribute('id', 'myCircle');
    svg.appendChild(circle); */

    // const b = [];
    for (let i = 0; i < 5; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'arc');
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', 'cyan');
      circle.setAttribute('stroke-width', '10');
      circle.setAttribute('cx', '10' + (5 * i) );
      circle.setAttribute('cy', '60');
      circle.setAttribute('start', '0');
      circle.setAttribute('end', '160');
      circle.setAttribute('r', '4' + (2 + i));
      circle.setAttribute('id', 'myCircle' + i);
      svg.appendChild(circle);
      // console.log('circle: ', circle);
      // b.push('circle' + i);
      // console.log('b: ', b);
      // this._funksions.fTMxToX2('circle' + i, 0, 20 * i);
    }

    /* const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('fill', 'red');
    rect.setAttribute('stroke', 'black');
    rect.setAttribute('stroke-width', '1');
    rect.setAttribute('x', '40');
    rect.setAttribute('y', '40');
    rect.setAttribute('width', '80');
    rect.setAttribute('height', '50');
    svg.appendChild(rect); */

    /* const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('stroke', 'purple');
    line.setAttribute('stroke-width', '15');
    line.setAttribute('x1', '30');
    line.setAttribute('y1', '170');
    line.setAttribute('x2', '130');
    line.setAttribute('y2', '20');
    svg.appendChild(line); */

    container.appendChild(svg);
  }

}
