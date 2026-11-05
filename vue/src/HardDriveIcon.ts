import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HardDriveIcon = defineComponent({
  name: 'HardDriveIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '14', width: '36', height: '20', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '9', y: '17', width: '30', height: '6', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '9', y: '25', width: '22', height: '6', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '37', cy: '28', r: '1.8', fill: '#588157', stroke: 'none' }));
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

export default HardDriveIcon;
