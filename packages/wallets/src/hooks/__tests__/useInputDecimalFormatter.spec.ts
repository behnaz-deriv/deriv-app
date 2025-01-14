import { act, renderHook } from '@testing-library/react-hooks';
import useInputDecimalFormatter from '../useInputDecimalFormatter';

describe('useInputDecimalFormatter', () => {
    it('should update the input value correctly when onChange is called', () => {
        const { result } = renderHook(() => useInputDecimalFormatter());

        act(() => {
            result.current.onChange({ target: { value: '123' } });
        });

        expect(result.current.value).toBe('123');
    });

    it('should handle fractional digits and sign options correctly', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(123, { fractionDigits: 2, withSign: true }));

        act(() => {
            result.current.onChange({ target: { value: '-789.12345' } });
        });

        expect(result.current.value).toBe('-789.12');
    });

    it('should round initial value to 2 digits when fractionDigits is undefined', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(123.456));

        expect(result.current.value).toBe('123.45');
    });

    it('should return empty string when inital is undefined', () => {
        const { result } = renderHook(() => useInputDecimalFormatter());

        expect(result.current.value).toBe('');
    });

    it('should return empty string when an user clear the unput', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(10));

        expect(result.current.value).toBe('10');

        act(() => {
            result.current.onChange({ target: { value: '' } });
        });

        expect(result.current.value).toBe('');
    });

    it('should return old value when an user add 2 dots', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(10.25));

        expect(result.current.value).toBe('10.25');

        act(() => {
            result.current.onChange({ target: { value: '56.754.78' } });
        });

        expect(result.current.value).toBe('10.25');
    });

    it('should return value with sign after adding sign for integer number', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(1, { withSign: true }));

        expect(result.current.value).toBe('1');

        act(() => {
            result.current.onChange({ target: { value: '-1' } });
        });

        expect(result.current.value).toBe('-1');
    });

    it('should return 0 if an user type 0', () => {
        const { result } = renderHook(() => useInputDecimalFormatter());

        expect(result.current.value).toBe('');

        act(() => {
            result.current.onChange({ target: { value: '0' } });
        });

        expect(result.current.value).toBe('0');
    });

    it('should return previous value if an user type char', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(10));

        expect(result.current.value).toBe('10');

        act(() => {
            result.current.onChange({ target: { value: 'test' } });
        });

        expect(result.current.value).toBe('10');
    });

    it('should return previous value if an user type integer part like this pattern 0*', () => {
        const { result } = renderHook(() => useInputDecimalFormatter(10));

        expect(result.current.value).toBe('10');

        act(() => {
            result.current.onChange({ target: { value: '03' } });
        });

        expect(result.current.value).toBe('10');
    });
});
