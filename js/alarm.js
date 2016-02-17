var Alarm = function(alarmTime) {
  this.alarmTime = alarmTime;
  this.currentTime;
}

Alarm.prototype.get = function() {
  if (this.alarmTime === this.currentTime) {
    return true;
  } else {
    return false;
  }
};

exports.Alarm = Alarm;
