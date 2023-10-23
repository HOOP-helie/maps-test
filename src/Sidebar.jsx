import usePlacesAutocomplete from "use-places-autocomplete";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Sidebar() {

    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

    return (
        <div className="sidebar">

            <Autocomplete
                freeSolo
                disableClearable
                options={data.map(({ option }) => option.description)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />

            {/* <TextField.Root>
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Search a place" />
            </TextField.Root>
            {status === "OK" && data.map(({ place_id, description }) => <p key={place_id}>{description}</p>)} */}
        </div>
    )
}

export default Sidebar