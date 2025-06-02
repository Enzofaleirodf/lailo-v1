import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  formatValue?: (value: number) => string;
}
export const RangeSlider = ({
  min,
  max,
  value,
  onChange,
  prefix = "",
  suffix = "",
  step = 1,
  formatValue
}: RangeSliderProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [inputValues, setInputValues] = useState({
    min: value[0].toString(),
    max: value[1].toString()
  });
  useEffect(() => {
    setLocalValue(value);
    setInputValues({
      min: value[0].toString(),
      max: value[1].toString()
    });
  }, [value]);
  const handleSliderChange = (newValue: number[]) => {
    const range: [number, number] = [newValue[0], newValue[1]];
    setLocalValue(range);
    setInputValues({
      min: range[0].toString(),
      max: range[1].toString()
    });
    onChange(range);
  };
  const handleInputChange = (type: 'min' | 'max', inputValue: string) => {
    setInputValues(prev => ({
      ...prev,
      [type]: inputValue
    }));
  };
  const handleInputBlur = (type: 'min' | 'max') => {
    const numValue = parseInt(inputValues[type]) || (type === 'min' ? min : max);
    const clampedValue = Math.max(min, Math.min(max, numValue));
    let newRange: [number, number];
    if (type === 'min') {
      newRange = [clampedValue, Math.max(clampedValue, localValue[1])];
    } else {
      newRange = [Math.min(localValue[0], clampedValue), clampedValue];
    }
    setLocalValue(newRange);
    setInputValues({
      min: newRange[0].toString(),
      max: newRange[1].toString()
    });
    onChange(newRange);
  };
  const formatDisplayValue = (val: number) => {
    if (formatValue) return formatValue(val);
    return `${prefix}${val.toLocaleString('pt-BR')}${suffix}`;
  };
  const resetToInitial = () => {
    const initialRange: [number, number] = [min, max];
    setLocalValue(initialRange);
    setInputValues({
      min: min.toString(),
      max: max.toString()
    });
    onChange(initialRange);
  };
  return <div className="space-y-4">
      <div className="px-2">
        <Slider value={localValue} onValueChange={handleSliderChange} min={min} max={max} step={step} className="w-full" />
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <input type="number" value={inputValues.min} onChange={e => handleInputChange('min', e.target.value)} onBlur={() => handleInputBlur('min')} className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" min={min} max={max} />
          
        </div>
        
        <span className="text-gray-400 text-sm">até</span>
        
        <div className="flex-1">
          <input type="number" value={inputValues.max} onChange={e => handleInputChange('max', e.target.value)} onBlur={() => handleInputBlur('max')} className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" min={min} max={max} />
          
        </div>
      </div>
      
      
    </div>;
};