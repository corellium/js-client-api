# CorelliumClient.InstanceInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **Object** | Finger Positions | 
**buttons** | [**[TouchInputButtonsInner]**](TouchInputButtonsInner.md) | Buttons to be held when this position is reached. Either a Button enum object or an ASCII character. No change if not defined. | [optional] 
**normalized** | **Boolean** | true if you want to use normalized x,y coordinates from 0-10000 (eg 5000,5000 is always center of screen) | [optional] 
**wait** | **Number** | Duration to wait before this input is executed.  Instant if not defined. | [optional] 
**start** | **Object** | Finger Positions | 
**end** | **Object** | Finger Positions | 
**bezierPoints** | **[Object]** | array of per-finger intermediate touch positions, up to 10 depending on model.  Straight line if not defined. | [optional] 
**startButtons** | [**[TouchInputButtonsInner]**](TouchInputButtonsInner.md) | Buttons to be held during this curve. | 
**endButtons** | [**[TouchInputButtonsInner]**](TouchInputButtonsInner.md) | Buttons to be left held after this curve.  Same as startButtons if not defined. | [optional] 
**duration** | **Number** | Duration to execute this curve over. | 
**required** | **String** | text to type | 
**keyDuration** | **Number** | How long to take to type each key.  150ms if not defined. | [optional] 


