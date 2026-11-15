import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JuicerIcon = defineComponent({
  name: 'JuicerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '21', y: '5', width: '6', height: '6', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '10.5', width: '20', height: '6', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M16 16.5 H32 L34 28.5 H14 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17.2 21.5 H30.8 L31.2 25.5 H16.6 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '28.5', width: '26', height: '13.5', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M37 31 L41.5 33.5', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '35.5', r: '2', fill: '#E76F51', stroke: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default JuicerIcon;
