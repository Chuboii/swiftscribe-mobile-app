import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDownOptions({ style, items, setItems, open = null, value = null, setOpen, setValue }) {


    return (
        <DropDownPicker
            style={[style]}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );
}