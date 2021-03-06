import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const DEFAULT_VAL = {
  input: 'NY',
  get title () {
    return 'New York, ' + this.input
  }
}

export default function ComboBox (props) {
  return (
    <Autocomplete
      id='combo-box-demo'
      className='combo-box-demo'
      options={states}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='States' variant='outlined' />}
      onChange={props.onHandleChange}
      defaultValue={DEFAULT_VAL}
    />
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const states = [
  DEFAULT_VAL,
  { title: 'Alabama, AL', input: 'AL' },
  { title: 'Alaska, AK', input: 'AK' },
  { title: 'Arizona, AZ', input: 'AZ' },
  { title: 'Arkansas, AR', input: 'AR' },
  { title: 'California, CA', input: 'CA' },
  { title: 'Colorado, CO', input: 'CO' },
  { title: 'Connecticut, CT', input: 'CT' },
  { title: 'Delaware, DE', input: 'DE' },
  { title: 'Florida, FL', input: 'FL' },
  { title: 'Georgia, GA', input: 'GA' },
  { title: 'Hawaii, HI', input: 'HI' },
  { title: 'Idaho, ID', input: 'ID' },
  { title: 'Illinois, IL', input: 'IL' },
  { title: 'Idiana, IN', input: 'IN' },
  { title: 'Iowa, IA', input: 'IA' },
  { title: 'Kansas, KS', input: 'KS' },
  { title: 'Kentucky, KY', input: 'KY' },
  { title: 'Louisiana, LA', input: 'LA' },
  { title: 'Maine, ME', input: 'ME' },
  { title: 'Maryland, MD', input: 'MD' },
  { title: 'Massachusetts, MA', input: 'MA' },
  { title: 'Michigan, MI', input: 'MI' },
  { title: 'Minnesota, MN', input: 'MN' },
  { title: 'Mississippi, MS', input: 'MS' },
  { title: 'Missouri, MO', input: 'MO' },
  { title: 'Montana, MT', input: 'MT' },
  { title: 'Nebraska, NE', input: 'NE' },
  { title: 'Nevada, NV', input: 'NV' },
  { title: 'New Hampshire, NH', input: 'NH' },
  { title: 'New Jersey, NJ', input: 'NJ' },
  { title: 'New Mexico, NM', input: 'NM' },
  { title: 'North Carolina, NC', input: 'NC' },
  { title: 'North Dakota, ND', input: 'ND' },
  { title: 'Ohio, OH', input: 'OH' },
  { title: 'Oklahoma, OK', input: 'OK' },
  { title: 'Oregon, OR', input: 'OR' },
  { title: 'Pennsylvania, PA', input: 'PA' },
  { title: 'Rhode Island, RI', input: 'RI' },
  { title: 'South Carolina, SC', input: 'SC' },
  { title: 'South Dakota, SD', input: 'SD' },
  { title: 'Tennessee, TN', input: 'TN' },
  { title: 'Texas, TX', input: 'TX' },
  { title: 'Utah, UT', input: 'UT' },
  { title: 'Vermont, VT', input: 'VT' },
  { title: 'Virginia, VA', input: 'VA' },
  { title: 'Washington, WA', input: 'WA' },
  { title: 'West Virginia, WV', input: 'WV' },
  { title: 'Visconsin, WI', input: 'WI' },
  { title: 'Wyonming, WY', input: 'WY' }
]
