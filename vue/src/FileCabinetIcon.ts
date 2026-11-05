import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileCabinetIcon = defineComponent({
  name: 'FileCabinetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '11', y: '5', width: '26', height: '38', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '15', y: '9', width: '18', height: '9', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '15', y: '20', width: '18', height: '9', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '15', y: '31', width: '18', height: '9', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M21 13 L27 13 M21 24 L27 24 M21 35 L27 35', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
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

export default FileCabinetIcon;
