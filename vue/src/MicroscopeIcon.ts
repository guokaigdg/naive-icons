import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicroscopeIcon = defineComponent({
  name: 'MicroscopeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '38', width: '26', height: '4', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '30', width: '18', height: '4', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M28 30 L31 24 L31 14', stroke: '#2A9D8F', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('rect', { x: '26', y: '6', width: '10', height: '6', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '27', y: '12', width: '8', height: '9', rx: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '31', cy: '24', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
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

export default MicroscopeIcon;
