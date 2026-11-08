import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BinocularsIcon = defineComponent({
  name: 'BinocularsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '18', width: '11', height: '21', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '27', y: '18', width: '11', height: '21', rx: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M21 24 L27 24', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('rect', { x: '11', y: '12', width: '9', height: '7', rx: '3', fill: '#E9C46A' }));
      children.push(h('rect', { x: '28', y: '12', width: '9', height: '7', rx: '3', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '15.5', cy: '39', r: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '32.5', cy: '39', r: '3', fill: '#FAEDCD' }));
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

export default BinocularsIcon;
