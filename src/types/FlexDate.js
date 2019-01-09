import {padLeft} from "../stringHelpers"

const datetimePattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?$/;
const zonedDatetimePattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?([+-](\d{2}):(\d{2}?))?$/;
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
const timePattern = /^(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?/;


class FlexZonedDateTime {
    constructor( dateStr ){
        var found = dateStr.match( zonedDatetimePattern );
        if( found == null ){
            throw "Invalid tz datetime format: " + dateStr;
        } else {
            this.date = new Date();
            this.date.setFullYear( found[1] );
            this.date.setMonth( found[2] - 1 );
            this.date.setDate( found[3] );
            this.date.setHours( found[4] );
            this.date.setMinutes( found[5] );
            this.date.setSeconds( found[6] );
            this.date.setMilliseconds( found[8] || 0 );
            let minutes = this.date.getMinutes() - this.date.getTimezoneOffset();
            this.tzHours = (parseInt( found[11] ) || 0);
            this.tzMinutes = (parseInt( found[12] ) || 0);
            this.offsetMinutes = this.tzHours * 60 + this.tzMinutes;
            if( found[10] ){
                if( found[10].startsWith( "-" ) ){
                    this.offsetMinutes = -this.offsetMinutes;
                }
                minutes = minutes - this.offsetMinutes;
            }
            this.date.setMinutes( minutes ); // convert to UTC date
        }
    }

    toJSON(){
        var convertedDate = new Date( this.date.getTime() ); // reconvert to inittial timezone
        convertedDate.setUTCMinutes( convertedDate.getMinutes() + this.offsetMinutes );
        var timezone;
        if( this.offsetMinutes < 0 ){
            timezone = "-"
        } else {
            timezone = "+"
        }
        timezone = timezone + padLeft( this.tzHours, 2 ) + ":" + padLeft( this.tzMinutes, 2 );
        if( convertedDate.getMilliseconds() !== 0 ){
            return `${convertedDate.getUTCFullYear()}-${padLeft( convertedDate.getUTCMonth() + 1, 2 )}-${padLeft( convertedDate.getUTCDate(), 2 )}T${padLeft( convertedDate.getUTCHours(), 2 )}:${padLeft( convertedDate.getUTCMinutes(), 2 )}:${padLeft( convertedDate.getUTCSeconds(), 2 ) }.${convertedDate.getUTCMilliseconds()}${timezone}`;
        } else {
            return `${convertedDate.getUTCFullYear()}-${padLeft( convertedDate.getUTCMonth() + 1, 2 )}-${padLeft( convertedDate.getUTCDate(), 2 )}T${padLeft( convertedDate.getUTCHours(), 2 )}:${padLeft( convertedDate.getUTCMinutes(), 2 )}:${padLeft( convertedDate.getUTCSeconds(), 2 )}${timezone}`;
        }
    }
}

class FlexDateTime {
    constructor( dateStr ){
        var found = dateStr.match( datetimePattern );
        if( found == null ){
            throw "Invalid datetime format: " + dateStr;
        } else {
            this.date = new Date();
            this.date.setFullYear( found[1] );
            this.date.setMonth( found[2] - 1 );
            this.date.setDate( found[3] );
            this.date.setHours( found[4] );
            this.date.setMinutes( found[5] );
            this.date.setSeconds( found[6] );
            this.date.setMilliseconds( found[8] || 0 );
            this.date.setMinutes( this.date.getMinutes() - this.date.getTimezoneOffset() ); // convert to UTC date
        }
    }

    toJSON(){
        if( this.date.getMilliseconds() !== 0 ){
            return `${this.date.getUTCFullYear()}-${padLeft( this.date.getUTCMonth() + 1, 2 )}-${padLeft( this.date.getUTCDate(), 2 )}T${padLeft( this.date.getUTCHours(), 2 )}:${padLeft( this.date.getUTCMinutes(), 2 )}:${padLeft( this.date.getUTCSeconds(), 2 ) }.${this.date.getUTCMilliseconds()}`;
        } else {
            return `${this.date.getUTCFullYear()}-${padLeft( this.date.getUTCMonth() + 1, 2 )}-${padLeft( this.date.getUTCDate(), 2 )}T${padLeft( this.date.getUTCHours(), 2 )}:${padLeft( this.date.getUTCMinutes(), 2 )}:${padLeft( this.date.getUTCSeconds(), 2 )}`;
        }
    }
}

class FlexDate {
    constructor( dateStr ){
        var found = dateStr.match( datePattern );
        if( found == null ){
            throw "Invalid date format: " + dateStr;
        } else {
            this.date = new Date();
            this.date.setDate( found[3] );
            this.date.setMonth( found[2] - 1 );
            this.date.setFullYear( found[1] );
        }
    }

    toJSON(){
        return `${this.date.getUTCFullYear()}-${padLeft( this.date.getUTCMonth() + 1, 2 )}-${padLeft( this.date.getUTCDate(), 2 )}`;
    }
}

class FlexTime {
    constructor( dateStr ){
        var found = dateStr.match( timePattern );
        if( found == null ){
            throw "Invalid time format: " + dateStr;
        } else {
            this.date = new Date();
            this.date.setHours( found[1] );
            this.date.setMinutes( found[2] );
            this.date.setSeconds( found[3] );
            this.date.setMilliseconds( found[5] || 0 );
            this.date.setMinutes( this.date.getMinutes() - this.date.getTimezoneOffset() ); // convert to UTC date
        }
    }

    toJSON(){
        if( this.date.getMilliseconds() !== 0 ){
            return `${padLeft( this.date.getUTCHours(), 2 )}:${padLeft( this.date.getUTCMinutes(), 2 )}:${padLeft( this.date.getUTCSeconds(), 2 ) }.${this.date.getUTCMilliseconds()}`;
        } else {
            return `${padLeft( this.date.getUTCHours(), 2 )}:${padLeft( this.date.getUTCMinutes(), 2 )}:${padLeft( this.date.getUTCSeconds(), 2 )}`;
        }
    }
}

export {FlexDate};
export {FlexDateTime};
export {FlexTime};
export {FlexZonedDateTime};
