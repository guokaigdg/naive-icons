import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BuildingIcon = defineComponent({
  name: 'BuildingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '6', width: '28', height: '36', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '12', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22', y: '12', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '12', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '14', y: '20', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22', y: '20', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '20', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '14', y: '28', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '28', width: '4', height: '4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '21', y: '34', width: '8', height: '8', fill: '#E9C46A', stroke: 'none' }));
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

export default BuildingIcon;
