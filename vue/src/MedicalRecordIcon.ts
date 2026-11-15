import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MedicalRecordIcon = defineComponent({
  name: 'MedicalRecordIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '6', width: '30', height: '36', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '18', y: '5', width: '12', height: '6', rx: '2', fill: '#E9C46A' }));
      children.push(h('rect', { x: '13', y: '13', width: '22', height: '25', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 17 V25 M20 21 H28', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M17 29.5 H31 M17 33 H27', stroke: '#264653', 'stroke-width': sw(1.8), fill: 'none' }));
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

export default MedicalRecordIcon;
