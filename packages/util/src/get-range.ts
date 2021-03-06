import isArray from './is-array';

export interface RangeType {
  readonly min: number;
  readonly max: number;
}

const getRange = function (values: number[]): RangeType {
  // 存在 NaN 时，min,max 判定会出问题
  let filterValues = values.filter((v) => !isNaN(v));
  if (!filterValues.length) { // 如果没有数值则直接返回0
    return {
      min: 0,
      max: 0,
    };
  }
  if (isArray(values[0])) {
    let tmp = [];
    for (let i = 0; i < values.length; i++) {
      tmp = tmp.concat(values[i]);
    }
    filterValues = tmp;
  }
  const max = Math.max.apply(null, filterValues);
  const min = Math.min.apply(null, filterValues);
  return {
    min,
    max,
  };
};

export default getRange;
