import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SafetyGogglesIcon = defineComponent({
  name: 'SafetyGogglesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '18', width: '15', height: '13', rx: '4.5', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '26', y: '18', width: '15', height: '13', rx: '4.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M22 23 H26', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M7 20 H4.7 M41 20 H43.3', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M11 22.5 H15', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M30 22.5 H34', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
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

export default SafetyGogglesIcon;
