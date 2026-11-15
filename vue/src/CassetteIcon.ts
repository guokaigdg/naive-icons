import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CassetteIcon = defineComponent({
  name: 'CassetteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '13', width: '38', height: '22', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '18', width: '26', height: '8.5', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '22.2', r: '2.3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '22.2', r: '2.3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M14 35 L18 29.5 L30 29.5 L34 35', fill: '#E9C46A' }));
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

export default CassetteIcon;
